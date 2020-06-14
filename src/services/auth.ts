interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'sdjbvsjvndlnvlkdvdklndls',
        user: {
          name: 'Giovani de Biagi Alves',
          email: 'giovani.alves121@gmail.com',
        },
      });
    }, 2000);
  });
}
