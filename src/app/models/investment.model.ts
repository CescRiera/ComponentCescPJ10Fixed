export class Investment {
  constructor(
    public title: string,
    public description: string,
    public image: string,
    public category?: string,
    public location?: string,
    public status?: string,
    public partner?: string,
    public partnerLogo?: string,
    public amount?: number
  ) {}
}