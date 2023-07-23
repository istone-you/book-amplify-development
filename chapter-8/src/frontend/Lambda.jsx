import { API } from "@aws-amplify/api";

import { lambdaInvoke } from "../graphql/queries";

export function Lambda() {
  const handleLambdaInvoke = async () => {
    try {
      const response = await API.graphql({
        query: lambdaInvoke,
      });
      const message = response.data.lambdaInvoke;
      alert(message);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <button onClick={handleLambdaInvoke}>メール送信</button>
    </div>
  );
}
