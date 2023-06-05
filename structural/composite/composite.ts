// TODO
// abstract class DeliveryItem {
//     items: DeliveryItem[]
//
//     addItem(item: DeliveryItem) {
//         this.items.push(item)
//     }
//
//     getItemPrices(): number {
//         return this.items.reduce((acc: number, i: DeliveryItem) => acc += i.getPrice(), 0)
//     }
//
//     abstract getPrice(): number
// }
//
// export class DeliveryShop extends DeliveryItem {
//     constructor(private deliveryFee: number) {
//         super();
//     }
//
//     getPrice(): number {
//         return this.items.reduce((acc: number, i: DeliveryItem) => acc += i.getPrice(), 0) + this.deliveryFee
//     }
// }
//
// export class Package extends DeliveryItem {
//     getPrice(): number {
//         return this.items.reduce((acc: number, i: DeliveryItem) => acc += i.getPrice(), 0)
//     }
// }