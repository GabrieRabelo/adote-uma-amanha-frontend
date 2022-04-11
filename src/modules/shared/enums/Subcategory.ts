import { EnumerableObject } from "../types/EnumerableObject";

export enum Subcategory {
  health = "SAUDE",
  professionalization = "PROFISSIONALIZACAO",
  education = "EDUCACAO",
  food = "ALIMENTACAO",
  others = "OUTROS",
}

function toString(subcategory: Subcategory): string {
  return subcategoryStrings[subcategory];
}

function allObjects(): EnumerableObject[] {
  return Object.entries(subcategoryStrings).map(([value, name]) => ({
    value: value,
    name,
  }));
}

function toObject(subcategory: Subcategory): EnumerableObject {
  return {
    name: subcategoryStrings[subcategory],
    value: subcategory,
  };
}

const subcategoryStrings = {
  [Subcategory.health]: "Saúde",
  [Subcategory.professionalization]: "Profissionalização",
  [Subcategory.education]: "Educação",
  [Subcategory.food]: "Alimentação",
  [Subcategory.others]: "Outros",
};

export default {
  toString,
  allObjects,
  toObject,
};
