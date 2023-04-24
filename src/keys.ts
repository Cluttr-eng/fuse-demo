// See https://letsfuse.readme.io/reference/authentication-1
const keys = {
    FUSE_CLIENT_ID: 'my-fuse-client-id',
    FUSE_API_KEY: 'my-fuse-api-key',
    // Prod is https://api.letsfuse.com
    FUSE_BASE_PATH: 'https://sandbox-api.letsfuse.com',
    MX_API_KEY: 'my-mx-api-key',
    MX_CLIENT_ID: 'my-mx-client-id',
    PLAID_CLIENT_ID: 'my-plaid-client-id',
    PLAID_SECRET: 'my-plaid-secret',
    TELLER_APPLICATION_ID: 'my-teller-application-id',
    TELLER_CERTIFICATE: 'my-teller-certificate',
    TELLER_PRIVATE_KEY: 'my-teller-private-key',
    // The teller signing secret is for verifying webhooks.
    // If you do not use webhooks you can ignore this.
    TELLER_SIGNING_SECRET: 'my-teller-signing-secret',
};

export default keys;
