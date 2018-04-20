export class DateConverter {
  public static toText(date: any): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  public static toDate(text: string): Date {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(text)) {
      throw new Error('Must be in the format yyyy-mm-dd');
    }
    return new Date(...text.split('-').map((item, index) => item - index % 2));
  }
}
