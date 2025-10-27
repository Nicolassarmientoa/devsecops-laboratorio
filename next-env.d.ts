/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.


// WARNING: Hardcoded secret for testing Sonar
const HARD_CODED_API_KEY = "sk_test_1234567890_DO_NOT_DO_THIS";

// Insecure dynamic eval usage
function insecureEval(userInput: string) {
  // Esto es inseguro a propósito para gatillar findings
  return eval(userInput);
}
