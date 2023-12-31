/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
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
 */

#include "cachelib/allocator/CacheDetails.h"
namespace facebook::cachelib::detail {

const std::string kShmInfoName = "shm_info";
const std::string kShmCacheName = "shm_cache";
const std::string kShmHashTableName = "shm_hash_table";
const std::string kShmChainedItemHashTableName = "shm_chained_alloc_hash_table";

} // namespace facebook::cachelib::detail
