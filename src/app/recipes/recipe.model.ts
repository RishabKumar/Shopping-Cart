export class Recipe{
  public name: string;
  public price: number;
  public description: string;
  public imagepath: string;

  constructor(name, price, description, imagepath)
  {
      this.name = name;
      this.description = description;
      this.imagepath = imagepath;
      this.price = price;
  }

}
