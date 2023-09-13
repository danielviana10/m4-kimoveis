import {handleErrors } from "./handleError.middleware";
import { verifyIdExists } from "./verifyIdExists.middleware";
import {validateBody } from "./validateBody.middleware";
import { verifyToCreate } from "./verifyNameExists.middleware";
import { ensureTokenAdmin } from "./ensureTokenAdmin.middleware";
import { ensureTokenIsValid } from "./ensureTokenIsValid.middleware";
import { verifyEmailExists } from "./verifyEmailExists.middleware";

export default { handleErrors, verifyIdExists, validateBody, verifyToCreate, ensureTokenAdmin, ensureTokenIsValid, verifyEmailExists };