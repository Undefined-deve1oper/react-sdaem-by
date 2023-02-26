import httpService from "./http.service";

const ticketEndpoint = "ticket/";

const ticketService = {
    fetchAll: async () => {
        const { data } = await httpService.get(ticketEndpoint);
        return data;
    },
    create: async (payload: any) => {
        const { data } = await httpService.post(ticketEndpoint, payload);
        return data;
    },
    confirm: async (id: string, payload: any) => {
        const { data } = await httpService.put(ticketEndpoint + id, payload);
        return data;
    },
    remove: async (id: string) => {
        const { data } = await httpService.delete(ticketEndpoint + id);
        return data;
    }
};

export default ticketService;
