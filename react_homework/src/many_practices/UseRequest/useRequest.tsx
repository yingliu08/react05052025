/**
 * Implement a "useRequest" hook with the following features:
 * @Params
 * 1. request: an async method that returns a Promise-like object (e.g., a data fetcher, or a timer is good too)
 * 2. options: an object that describes how the request is configured, with the following properties:
 *    - "auto": if true, the request will be automatically triggered when the "useRequest" hook is loaded
 *    - "ready": if false, the request will not be triggered
 *    - "refreshDeps": a dependency array that re-trigger the request if anything in the array changes (just like useEffect)
 *    - "onSuccess": success callback that receives the data & request params (i.e., (data: T, reqParams: P) => void)
 *    - "onError": error callback that receives the error object (i.e., (error: Error) => void)
 * @Return
 * 1. A object with the following properties:
 *    - "data": the return value of the request
 *    - "run": a method for users to trigger the request manually
 *    - "loading": if the data is loading
 *    - "error": an error object thrown by the request if an error is catched
 *
 * ** Bonus Points **
 * 1. Writing your codes in TS
 * 2. Adding a new param "debounceInterval", if set,
 */
import { useState, useEffect, useCallback } from "react";

// interface OptionProps {
//   auto: boolean,
//   ready: boolean,
//   refreshDeps
// }

const useRequest = (request, options) => {
  /** write your codes here */
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [params, setParams] = useState();

  const {
    auto = false,
    ready = true,
    refreshDeps = [],
    onSuccess,
    onError,
    debounceInterval,
  } = options;

  if (!ready) return {};

  const run = async () => {
    try {
      setLoading(true);
      const result = await request(params);
      setData(result);
      if (onSuccess) onSuccess(result, params);
    } catch (error) {
      setError(error);
      if (onError) onError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!ready) return {};
    if (auto || refreshDeps.length > 0) {
      run();
    }
  }, [params, auto, ready, refreshDeps]);
  console.log(error);
  return { data, loading, error, run };
};

export default useRequest;
