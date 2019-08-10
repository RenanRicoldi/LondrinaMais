export function imageURL(imagem){

    if (imagem == null){
        return ' '
    }
        
    if(imagem.includes(".jpeg"))
        return imagem.replace("image://v1/", "https://static.wixstatic.com/media/").replace(/.jpeg.*/i, ".jpeg")
    else if(imagem.includes(".jpg"))
        return imagem.replace("image://v1/", "https://static.wixstatic.com/media/").replace(/.jpg.*/i, ".jpg")
    else if(imagem.includes(".png"))
        return imagem.replace("image://v1/", "https://static.wixstatic.com/media/").replace(/.png.*/i, ".png")

}