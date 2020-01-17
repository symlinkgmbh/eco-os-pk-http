/**
 * Copyright 2018-2020 Symlink GmbH
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




import { AbstractHttpClient } from "./AbstractHttpClient";
import { PkHttp } from "@symlinkde/eco-os-pk-models";
import { AxiosInstance } from "axios";

export class HttpClient extends AbstractHttpClient implements PkHttp.IHttpClient {
  constructor(_baseURL: string, _timeout: number) {
    super(_baseURL, _timeout);
  }

  public getClient(): AxiosInstance {
    return this.getHttpClient();
  }
}
