import axios from "axios";

export const getAllSalles = async () => {
    try {
        const responses =  await axios.get("/api/salles");
        return responses.data.salles
    } catch (err) {
        console.log(err)
    }
}
