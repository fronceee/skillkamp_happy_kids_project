import { createServer, Model } from "miragejs";
import Data from "./data";

createServer({
  models: {
    product: Model,
  },

  seeds(server) {
    for (let i = 0; i < Data.length; i++) {
      server.create("product", Data[i]);
    }
  },
  routes() {
    this.namespace = "api";
    this.get("/img", () => {
      return {
        img: "./assets/banner_story.png",
      };
    });
    this.get(
      "/allProducts",
      (schema) => {
        return schema.products.all();
      },
      { timing: 300 }
    );
    this.get(
      "/newArrivalsProducts",
      (schema) => {
        return schema.products.where({ ribbon: "NEW" });
      },
      { timing: 400 }
    );
    this.get("/product/:id",(schema,request) => {
      const id = request.params.id;
      return schema.products.findBy({id: id})
    })
  },
});
