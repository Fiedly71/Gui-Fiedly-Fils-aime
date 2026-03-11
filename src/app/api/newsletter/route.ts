import { NextRequest, NextResponse } from "next/server";

// Email de destination pour recevoir les inscriptions
const ADMIN_EMAIL = "gfdigitalstudio@gmail.com"; // À modifier avec votre email

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    // Option 1: Envoyer via un service d'email (ex: Resend, SendGrid)
    // Pour l'instant, on stocke dans un fichier JSON côté serveur
    
    const fs = await import("fs/promises");
    const path = await import("path");
    
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "newsletter-subscribers.json");
    
    // Créer le dossier data s'il n'existe pas
    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch {
      // Le dossier existe déjà
    }
    
    // Lire les abonnés existants
    let subscribers: { email: string; date: string }[] = [];
    try {
      const data = await fs.readFile(filePath, "utf-8");
      subscribers = JSON.parse(data);
    } catch {
      // Fichier n'existe pas encore
    }
    
    // Vérifier si l'email existe déjà
    if (subscribers.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json(
        { message: "Vous êtes déjà inscrit!" },
        { status: 200 }
      );
    }
    
    // Ajouter le nouvel abonné
    subscribers.push({
      email: email.toLowerCase(),
      date: new Date().toISOString(),
    });
    
    // Sauvegarder
    await fs.writeFile(filePath, JSON.stringify(subscribers, null, 2));
    
    console.log(`📧 Nouvel abonné newsletter: ${email}`);
    console.log(`📊 Total abonnés: ${subscribers.length}`);
    
    return NextResponse.json({
      success: true,
      message: "Inscription réussie!",
      totalSubscribers: subscribers.length,
    });
    
  } catch (error) {
    console.error("Erreur newsletter:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// GET pour voir les stats (protégé en prod)
export async function GET() {
  try {
    const fs = await import("fs/promises");
    const path = await import("path");
    
    const filePath = path.join(process.cwd(), "data", "newsletter-subscribers.json");
    
    try {
      const data = await fs.readFile(filePath, "utf-8");
      const subscribers = JSON.parse(data);
      
      return NextResponse.json({
        totalSubscribers: subscribers.length,
        // En production, ne pas exposer les emails sans authentification
        // subscribers: subscribers,
      });
    } catch {
      return NextResponse.json({ totalSubscribers: 0 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
