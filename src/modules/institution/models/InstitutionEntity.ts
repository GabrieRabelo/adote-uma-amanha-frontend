import { UserEntity } from "@/modules/shared/models/UserEntity";
import { UserRole } from "@/modules/shared/enums/UserRole";
import { AddressDTO } from "../dtos/InstitutionDetailDTO";

export default class InstitutionEntity extends UserEntity {
  constructor(
   public id: number,
   public name: string,
   public phone: string,
   public email: string,
   public site: string,
   public cpf_cnpj: string,
   public addressDTO: AddressDTO,
   public password?: string
  ) {
    super(id, name, phone, email, site, addressDTO, UserRole.donator);
    this.password = password
    this.cpf_cnpj = cpf_cnpj
    

  }
}


