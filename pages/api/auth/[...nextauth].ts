import NextAuth, { NextAuthOptions } from "next-auth";
import AzureADProvider from 'next-auth/providers/azure-ad';

export const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId: "<replace-your-clientid>",
      clientSecret: "<replace-your-client-secret>",
      tenantId: "<replace-your-tenanId>",
      authorization: { params: { scope: "openid" } },
    })
  ]
}

export default NextAuth(authOptions);