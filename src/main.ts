// @ts-nocheck

function calculateDigit(cpf: string, factor: number) {
  let total = 0;
  for (const digit of cpf) {
    if (factor > 1) total += digit * factor--;
  }
  const rest = total % 11;
  return rest < 2 ? 0 : 11 - rest;
}

function isInvalidLength(cpf: string) {
  return cpf.length !== 11;
}

function allDigitsTheSame(cpf: string) {
  const [firstDigit] = cpf;
  return [...cpf].every((digit) => digit === firstDigit);
}

function extractDigits(cpf: string){
  return cpf.slice(9)
}

export function validateCpf(rowCpf) {
  if (!rowCpf) return false;
  const cleanCpf = rowCpf.replace(/\D/g, "");
  if (isInvalidLength(cleanCpf)) return false;
  if (allDigitsTheSame(cleanCpf)) return false;
  const dg1 = calculateDigit(cleanCpf, 10);
  const dg2 = calculateDigit(cleanCpf, 11);
  let actualDigit = extractDigits(cleanCpf);
  const validatedDigit = `${dg1}${dg2}`;
  return actualDigit === validatedDigit;
}
