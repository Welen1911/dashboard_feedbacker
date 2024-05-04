import {
  validateEmptyAndLength3,
  validateEmptyAndEmail,
  validateEmpty,
} from "./validators";

describe("Validators utils", () => {
  it("should give an error with empty payload", () => {
    expect(validateEmptyAndLength3()).toBe("*Este campo é obrigatório!");
  });

  it("should give an error with less then 3 character payload", () => {
    expect(validateEmptyAndLength3("12")).toBe(
      "*Este campo precisa no mínimo de 3 caracteres!"
    );
  });

  it("should returns true when input pass a correct param", () => {
    expect(validateEmptyAndLength3("1234")).toBe(true);
  });

  it("should give an error with empty payload email input", () => {
    expect(validateEmptyAndEmail()).toBe("*Este campo é obrigatório!");
  });

  it("should give an error with a invalid param email input", () => {
    expect(validateEmptyAndEmail("123@")).toBe(
      "*Este campo precisa ser um E-mail!"
    );
  });

  it("should returns true when input email a correct param", () => {
    expect(validateEmptyAndEmail("123@teste.com")).toBe(true);
  });

  it("should give an error with empty payload name input", () => {
    expect(validateEmpty()).toBe("*Este campo é obrigatório!");
  });

  it("should returns true when input name a correct param", () => {
    expect(validateEmpty("admin")).toBe(true);
  });
});
