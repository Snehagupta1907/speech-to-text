import axios from "axios";
const baseUrl = "https://api.rev.ai/speechtotext/v1";
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "Authorization": "Bearer 02WnnpPYQyxrCyX5Il1euxQP4j1bQdKrgoW7zYMk15vQveCGzuU78TngoTLRyDezHO17c9oMAhgJv12seB-apoe9xUitc",
    "Content-Type": "application/json",
  },
});

export default instance;
