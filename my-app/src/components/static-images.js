import image from '../logo.svg';
function Images() {
    /**
     * We can access static images from public/src folders
     * We can give direct path to access images from public folders
     * If we want to access images from src folder then we need to import the file and access it
     */
    return(
        <>
            <img src={'./logo192.png'} width={200} />
            <img src={image} width={200} />
        </>
    )
}

export default Images