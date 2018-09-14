export class Persional {
    id: number;
    avatar: string;
    fullname: string;
    career: string;
    dateofbirth: string;
    phone: string;
    address: string;
    email: string;
    website: string;
    nationality: string;
    aboutme: string;
}

export class Social {
    id: number;
    icon: string;
    name: string;
    link: string;
    status: string;
}

// tslint:disable-next-line:class-name
export class listInterest {
    id: number;
    icon: string;
    name: string;
}


export class Interest {
    des: string;
    list: listInterest[];
}

export class Education {
    id: string;
    year: string;
    level: string;
    schoolname: string;
    decription: string;
}
