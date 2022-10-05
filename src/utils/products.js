
const products = [
    {id: 1, category: 'perifericos', title: 'Mouse', price: 50, stock: 10, pictureUrl: 'https://www.4games.pro/wp-content/uploads/2020/11/logitech-g-pro-wireless-2-600x600-1.jpg?x62684' , description: 'Mouse de mano marca Cachito cómodo para uso cotidiano'},
    {id: 2, category: 'perifericos', title: 'Teclado', price: 60, stock: 5, pictureUrl: 'https://puertodigital.com.ar/13015-large_default/teclado-mecanico-gamer-redragon-kumara-k552-rgb.webp' , description: 'Teclado gamer marca Cachito, switches mecanicos outemu blue'},
    {id: 3, category: 'perifericos', title: 'Pad', price: 25, stock: 5, pictureUrl: 'https://www.tryhardware.com.ar/wp-content/uploads/2022/01/Mouse-Pad-Zowie-GTF-X-Black.jpg' , description: 'MousePad o Pad XXL (Es necesario tener Mouse para utilizarse)'},
    {id: 4, category: 'perifericos', title: 'Auriculares', price: 150, stock: 15, pictureUrl: 'https://corporativo.tecnoplaza.com.co/wp-content/uploads/2019/04/Logitech-G430-Wired-Gaming-Headphone-Headset-Blue-690033-.jpg' , description: 'Auticulares gamer 7.1 marca Cachito, regulables y reversibles'},
    {id: 5, category: 'hardware', title: 'Mother MSI', price: 150, stock: 15, pictureUrl: 'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-msi-b450m-provdh-max-sam4-b450-0.jpg' , description: 'Mother MSI B450(Necesario un gabinete para colocarlo)'},
    {id: 6, category: 'hardware', title: 'Ram', price: 150, stock: 15, pictureUrl: 'https://novati.com.ar/tiendainformatica/wp-content/uploads/2020/06/DDR4-HYPERX-FURY-RGB-600x600.jpg' , description: 'Ram DDR4 (Esta es epecial para el mother de al lado)'},
    {id: 7, category: 'hardware', title: 'Procesador Ryzen 5', price: 150, stock: 15, pictureUrl: 'https://www.deffo.com.ar/wp-content/uploads/2020/07/Ryzen-Small-5-1.jpg' , description: 'Procesador Ryze (GAMER) (Ideal para el mother MSI y la Ram)'},
    {id: 8, category: 'hardware', title: 'SSD WD Blue', price: 150, stock: 15, pictureUrl: 'https://www.deffo.com.ar/wp-content/uploads/2022/07/WDS250G3B0A-1.webp' , description: 'SSD WD BLue 250GB (Ideal para Ryzen 5 y Mothers MSI)'},
]

export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
        setTimeout(()=>{
            return resolve(products);
        },2000);
    })

    return promise;
}

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = products.find((product) => product.id === parseInt(id));

        setTimeout(()=>{
            return resolve(result);
        },2000);
    })

    return promise;
}

export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
        const result = products.filter((product) => product.category === categoryId);
        setTimeout(()=>{
            return resolve(result);
        },2000);
    })

    return promise;
}