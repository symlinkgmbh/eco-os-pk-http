/**
 * Copyright 2018-2019 Symlink GmbH
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 */



import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export abstract class AbstractHttpClient {
  protected readonly client: AxiosInstance;

  public constructor(_baseURL: string, _timeout: number) {
    this.client = Axios.create(<AxiosRequestConfig>{
      baseURL: _baseURL,
      timeout: _timeout,
    });
  }

  protected getHttpClient(): AxiosInstance {
    return this.client;
  }
}
