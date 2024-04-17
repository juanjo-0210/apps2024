import { instance } from "./api";

export const libreData = () => instance.get("/search?q=hogar")