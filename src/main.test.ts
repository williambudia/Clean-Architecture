import { validateCpf } from "./main";

describe("Testando validade do CPF", () => {
  const validsCPFs = [
    "987.654.321-00",
    "714.602.380-01",
    "313.030.210-72",
    "144.796.170-60",
  ];
  test.each(validsCPFs)(
    "Verificar se numero dos cpfs são válidos: %s",
    (cpf: string) => {
      const isValidCPF = validateCpf(cpf);
      expect(isValidCPF).toBeTruthy();
    }
  );

  const invalidCPFs = [
    "000.000.000-00",
    "111.111.111-11",
    "222.222.222-22",
    "333.333.333-33",
    "444.444.444-44",
    "555.555.555-55",
    "666.666.666-66",
    "777.777.777-77",
    "888.888.888-88",
    "999.999.999-99",
  ];
  test.each(invalidCPFs)(
    "Verificar se numero dos cpfs são inválidos: %s",
    (cpf: string) => {
      const isValidCPF = validateCpf(cpf);
      expect(isValidCPF).toBeFalsy();
    }
  );
  test("Verificar um cpf null", () => {
    const isValidCPF = validateCpf(null);
    expect(isValidCPF).toBeFalsy();
  });
  test("Verificar um cpf undefined", () => {
    const isValidCPF = validateCpf(undefined);
    expect(isValidCPF).toBeFalsy();
  });
  test("Verificar um cpf com tamanho errado", () => {
    const isValidCPF = validateCpf("123");
    expect(isValidCPF).toBeFalsy();
  });
});
