export class Persional {
    id: number;
    fullname: string;
    career: string;
    dateofbirth: string;
    phone: string;
    address: string;
    email: string;
    website: string;
    nationality: string;
    aboutme: string;
    social?: Social[];
}

export class Social {
    icon: string;
    name: string;
    link: string;
}

export class Education {
    id: string;
    year: string;
    level: string;
    schoolname: string;
    decription: string;
}
