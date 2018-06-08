/**
 * Responsible for rendering the Bikes page.
 */
class Bikes {
    static get Template() {
        return this.template;
    }

    static get Modal() {
        return this.modal;
    }

    static SetupUserInterface() {
        let modalElement = document.getElementById('bicycleSpecsModal');

        this.template = document.getElementById('bicycle-product');
        this.modal = {
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
            const bike = Bike.Instances[i];

            let productClone = document.importNode(Bikes.Template.content, true);
            let buttons = productClone.getElementsByTagName('button');

            let productData = {
                title: productClone.getElementsByClassName('card-title')[0],
                price: productClone.getElementsByClassName('bike-price')[0],
                colors: productClone.getElementsByClassName('bike-color'),
                seeMoreBtn: buttons[buttons.length - 1]
            }

            productData.title.innerHTML = bike.Name;
            productData.price.innerHTML = "$".concat(bike.Price);

            productData.seeMoreBtn.addEventListener('click', function(){
                this.RefreshSpecsModal(bike);
            });
            parentNode.appendChild(productClone);
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