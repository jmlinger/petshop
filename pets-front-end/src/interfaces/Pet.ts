export interface IPet {
  id: number,
  tutorsName: string,
  name: string;
  age: number;
  type: string;
}

export interface INewPet {
  tutorsName: string,
  name: string;
  age: number;
  type: string;
}

export interface ICreatePet {
  createPetInput: INewPet
}