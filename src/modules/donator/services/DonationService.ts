import { HTTP } from "@/api/http-common";
import { NecessityEntity } from "@/modules/institution/models/NecessityEntity";

export function getDonation(id: number): Promise<unknown> {
  return HTTP.get(`doacoes/${id}`)
    .then(({ data }) => ({
      id: data.id,
      title: data.assunto,
      category: data.categoria,
      date: data.data,
      description: data.descricao,
      status: data.status,
      subcategory: data.subcategoria,
    }))
    .catch((err) => Promise.reject(err));
}

export async function deleteDonation(id: number): Promise<void> {
  return HTTP.delete(`/pedidos/${id}`)
    .then(() => Promise.resolve())
    .catch(() => Promise.reject());
}

export async function updateNecessity(
  donation: NecessityEntity
): Promise<void> {
  const donationToEdit: unknown = {
    assunto: donation.title,
    descricao: donation.description,
    categoria: donation.category,
    subcategoria: donation.subcategory,
    urlVideo: donation.url,
  };
  return HTTP.put(`/pedidos/${donation.id}`, donationToEdit)
    .then(() => Promise.resolve())
    .catch(() => Promise.reject());
}

export async function matchDonation(donation: NecessityEntity): Promise<void> {
  const donationToEdit: unknown = {
    assunto: donation.title,
    descricao: donation.description,
    categoria: donation.category,
    subcategoria: donation.subcategory,
    urlVideo: donation.url,
  };
  return HTTP.post(`/match/${donation.id}`, donationToEdit)
    .then(() => Promise.resolve())
    .catch(() => Promise.reject());
}
