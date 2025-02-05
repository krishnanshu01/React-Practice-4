export interface InputProp {
    list: listArray[];
    setList: React.Dispatch<React.SetStateAction<listArray[]>>;
}

export interface listArray {
    name: string;
    number: string;
}
