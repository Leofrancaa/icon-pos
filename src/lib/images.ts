// Constantes para imagens externas
export const IMAGES = {
    // Hero backgrounds - URLs simplificadas
    hero: {
        dental: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
        clinic: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&q=80",
        medical: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1920&q=80"
    },

    // Professor photos - URLs simplificadas
    professors: {
        male1: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
        female1: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
        male2: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80",
        female2: "https://images.unsplash.com/photo-1594824804732-ca58f6832da2?w=400&q=80",
        male3: "https://images.unsplash.com/photo-1651008376811-b98baee60c1f?w=400&q=80"
    },

    // Course images
    courses: {
        basic: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80",
        advanced: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
        guided: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80"
    },

    // Patient care
    patients: {
        care: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
        consultation: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
    }
};

// URLs alternativas para teste (caso as principais não funcionem)
export const IMAGES_FALLBACK = {
    hero: {
        dental: "https://picsum.photos/1920/1080?random=1",
    },
    professors: {
        male1: "https://picsum.photos/400/400?random=2",
        female1: "https://picsum.photos/400/400?random=3",
    }
};

// Função utilitária para gerar URLs com parâmetros customizados
export const getImageUrl = (baseUrl: string, width?: number, height?: number, quality = 80) => {
    const url = new URL(baseUrl);
    if (width) url.searchParams.set('w', width.toString());
    if (height) url.searchParams.set('h', height.toString());
    url.searchParams.set('q', quality.toString());
    return url.toString();
};