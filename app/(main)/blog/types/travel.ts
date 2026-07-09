export type Media = {
    url: string;
    type: "image" | "video";
    caption?: string;
};


export type DayGallery = {
    day: number;
    title: string;
    description: string;
    media: Media[];
};


export type Activity = {
    time: string;
    title: string;
    description: string;
    location?: string;
    image?: string;
};


export type ItineraryDay = {
    day: number;
    title: string;

    activities: {
        morning: Activity[];
        afternoon: Activity[];
        evening: Activity[];
    };
};


export type Coordinates = {
    latitude: number;
    longitude: number;
};


export type Attraction = {
    id: string;
    name: string;

    category:
        | "historical"
        | "nature"
        | "adventure"
        | "culture"
        | "shopping";

    description: string;

    location: Coordinates;

    media: Media[];

    rating: number;
};


export type RouteNode = {
    id: string;

    name: string;

    coordinates: Coordinates;

    description: string;

    media: Media[];

    activities: string[];
};


export type TravelRoute = {
    source: RouteNode;

    destination: RouteNode;

    stops: RouteNode[];
};


export type Hotel = {
    name: string;

    category:
        | "budget"
        | "premium"
        | "luxury";

    priceRange: string;

    rating: number;

    image: string;
};


export type FoodExperience = {
    name: string;

    description: string;

    mustTry: string[];

    image: string;
};


export type TravelTip = {
    title: string;

    description: string;
};


export type Review = {
    userName: string;

    rating: number;

    comment: string;

    date: string;
};


export type BookingInfo = {
    duration: string;

    bestSeason: string;

    estimatedBudget: {
        currency: string;
        amount: number;
    };

    availablePackages: string[];
};


export type TravelExperience = {

    id: string;

    title: string;

    thumbnail: string;

    shortDescription: string;

    description: string;


    country: string;

    city: string;


    gallery: DayGallery[];


    itinerary: ItineraryDay[];


    attractions: Attraction[];


    route: TravelRoute;


    hotels: Hotel[];


    food: FoodExperience[];


    tips: TravelTip[];


    reviews: Review[];


    booking: BookingInfo;
};