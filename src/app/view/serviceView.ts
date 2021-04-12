import Service from '../model/service'

export default {
    Render(service: Service) {
        return {
            marketStatus: service.marketStatus,
            price: service.price,
            founds: service.founds,
            size: service.size
        }
    },

    renderMany(service: Service[]) {
        return service.map(service => this.Render(service));
    }
}