import { request } from ".";

export class Site {
  static async find() {
    return request.get("/sites");
  }
  static async add({ name, url, owner }) {
    return request.post("/", { name, url, owner });
  }
  static async delete(id) {
    return request.delete(id);
  }
}
