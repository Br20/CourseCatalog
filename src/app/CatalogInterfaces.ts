export interface ICourse {
    id : number;
    name : string;
    category : ICategory;
    brief_description : string;
    duration_time : number; // hours 
    img : string;
};

export interface ICategory {
    id : number;
    name : string;
    amount_courses : number;
    img : string;
};
