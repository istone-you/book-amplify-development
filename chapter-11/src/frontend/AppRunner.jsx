import { API } from "@aws-amplify/api";

import { getAppRunnerResponse } from "../graphql/queries";

export function AppRunner() {
  const getResponse = async () => {
    try {
      const response = await API.graphql({
        query: getAppRunnerResponse,
      });
      const message = response.data.getAppRunnerResponse.message;
      alert(message);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <button onClick={getResponse}>データを取得</button>
    </div>
  );
}
