import { parse } from 'cookie';

export async function getCookie(req, cookieName) {
  const cookies = parse(req?.headers?.cookie  || ''); // Parse les cookies à partir des en-têtes de la requête
  return cookies[cookieName] || null; // Renvoie la valeur du cookie ou null si le cookie n'est pas présent
}