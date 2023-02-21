export class Food{
  id!:string;// '!' required
  name!:string;
  price!:number;
  tags?: string[];// '?' optional
  favorite!:boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string[];
  cookTime!:string;
}
