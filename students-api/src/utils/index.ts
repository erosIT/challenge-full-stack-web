const cpfValidator = (value: string) => {
  if (!value) return false;

  const cpf = value.replace(/\D/g, '');
  if (cpf.toString().length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let result = true;

  [9, 10].forEach((j) => {
    let soma = 0; let
      r: number;
    cpf.split(/(?=)/).splice(0, j).forEach((e, i) => {
      // eslint-disable-next-line radix
      soma += parseInt(e) * ((j + 2) - (i + 1));
    });
    r = soma % 11;
    r = (r < 2) ? 0 : 11 - r;

    if (r !== Number(cpf.substring(j, j + 1))) result = false;
  });

  return result;
};

export {
  cpfValidator,
};
