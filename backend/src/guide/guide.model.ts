import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

class GuideContent {
  @prop()
  title: string;
  @prop()
  content: string;
  @prop()
  iconUrl: string;
}

class Carousel {
  @prop()
  imageUrl: string;
}

class Products {
  @prop()
  title: string;
  @prop()
  imageUrl: string;
}

export interface GuideModel extends Base { }
export class GuideModel extends TimeStamps {
  @prop()
  title?: string;

  @prop({ type: () => [GuideContent]})
  guideContent: GuideContent[];

  @prop({ type: () => [Carousel]})
  carousel: Carousel[];

  @prop({ type: () => [Products]})
  products: Products[];
}
