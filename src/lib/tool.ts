export function getBase64(file : any) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e : any) {
            const image = new Image();
            const url = e.target.result;
            image.src = url;
            image.onload = function () {
                const _this : any = this
                const width = _this.width
                const height = _this.height
                resolve({width, height, url})
            }
        };
        reader.onerror = error => reject(error);
    });
}