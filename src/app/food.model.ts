export class Food {
  constructor(
    public foodName: string,
    public foodDetails: string,
    public foodCalories: number
  ) { }

  isValidName() {
    return this.foodName.trim() !== '';
  }

  isValidCalories() {
    // Must be filled in
    if (this.foodCalories.toString().trim() === '') {
      return false;
    }

    // Must evaluate to greater or equal to 0
    if (!(this.foodCalories >= -0.000000001)) {
      return false;
    }

    return true;
  }
}
