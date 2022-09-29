export interface Ticket {
  id: string;
  title: string;
  description: string;
  creator: string;
  date: string | Date;
  type: string;
}
