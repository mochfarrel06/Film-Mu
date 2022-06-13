import "../component/hero-component";

const Home = {
  async render() {
    return `
            <hero-component></hero-component>
    `;
  },

  async afterRender(){}
};

export default Home;
