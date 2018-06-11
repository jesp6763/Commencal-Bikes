/**
 * Responsible for everything that has to do with the Bikes page.
 */
class Bikes {
    static get Template() {
        return this.template;
    }

    static set Template(value) {
        this.template = value;
    }

    static get Modal() {
        return this.modal;
    }

    static set Modal(value) {
        this.modal = value;
    }

    static SetupUserInterface() {
        let modalElement = document.getElementById('bicycleSpecsModal');

        Bikes.Template = document.getElementById('bicycle-product');
        Bikes.Modal = {
            element: modalElement,
            title: modalElement.querySelector('#bicycle-product-title'),
            content: modalElement.getElementsByClassName('modal-body')[0]
        };

        Bike.Instances["Kids Baik"] = new Bike("Kids Baik", 399, [], {});

        Bikes.PopulateWithProducts();
    }

    /**
    * Populates a node with all bicycle products
    */
    static PopulateWithProducts() {
        let bikeInstanceKeys = Object.keys(Bike.Instances);
        
        for (let i = 0; i < bikeInstanceKeys.length; i++) {
            const bike = Bike.Instances[bikeInstanceKeys[i]];

            let productClone = document.importNode(Bikes.Template.content, true);
            let seeSpecsButton = productClone.querySelector('button');

            let productData = {
                title: productClone.querySelector('.card-title'),
                price: productClone.querySelector('.bike-price'),
                colors: productClone.querySelector('.bike-color'),
                seeSpecsBtn: seeSpecsButton
            }

            productData.title.innerHTML = bike.Name;
            productData.price.innerHTML = "$".concat(bike.Price);

            productData.seeSpecsBtn.addEventListener('click', function(){
                this.RefreshSpecsModal(bike);
                console.log("wdla");
            });

            document.querySelector('.products-list').appendChild(productClone);
        }
    }

    /**
     * Refreshes the modal data with the bike's specs.
     * @param {Bike} bike The instance of the bike.
     */
    static RefreshSpecsModal(bike) {
        // let bikeSpecKeys = Object.keys(bike.Specs);

        // for (let i = 0; i < bikeSpecKeys.length; i++) {
        //     const element = bikeSpecKeys[i];

        // }

        Modal.title.innerHTML = bike.Name;

        Modal.content.innerHTML = `
        <p class="font-weight-bold spec-title">Frame</p>
        <p class="spec-description ml-2">Pure Fix Urban Frame
            <br>High Tensile Steel (Tig-welded)
        </p>`;
    }
}