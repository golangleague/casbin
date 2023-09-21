window.BENCHMARK_DATA = {
  "lastUpdate": 1695266505440,
  "repoUrl": "https://github.com/golangleague/casbin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ee4a9bbdcc427ed9b9a21b0a5451d4c2056b721",
          "message": "fix: requestJsonReplace (#1313)",
          "timestamp": "2023-09-02T23:35:45+08:00",
          "tree_id": "17cfe6b0858be828114716cf7bb53afe53434019",
          "url": "https://github.com/golangleague/casbin/commit/0ee4a9bbdcc427ed9b9a21b0a5451d4c2056b721"
        },
        "date": 1695266504413,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 23.94,
            "unit": "ns/op",
            "extra": "50238376 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50238376 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50238376 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 271,
            "unit": "ns/op",
            "extra": "4374474 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4374474 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4374474 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 283,
            "unit": "ns/op",
            "extra": "4437552 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4437552 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4437552 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 275.6,
            "unit": "ns/op",
            "extra": "4370686 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4370686 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4370686 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 307.2,
            "unit": "ns/op",
            "extra": "3778816 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3778816 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3778816 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 282.3,
            "unit": "ns/op",
            "extra": "4242462 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "4242462 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4242462 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 270.8,
            "unit": "ns/op",
            "extra": "4488483 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4488483 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4488483 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 291.7,
            "unit": "ns/op",
            "extra": "3694400 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "3694400 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3694400 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4318,
            "unit": "ns/op",
            "extra": "268501 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1524,
            "unit": "B/op",
            "extra": "268501 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "268501 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 298.6,
            "unit": "ns/op",
            "extra": "4064410 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4064410 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4064410 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 277.8,
            "unit": "ns/op",
            "extra": "4366237 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4366237 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4366237 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 284.7,
            "unit": "ns/op",
            "extra": "4207315 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4207315 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4207315 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 513.8,
            "unit": "ns/op",
            "extra": "2238446 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2238446 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2238446 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 289.8,
            "unit": "ns/op",
            "extra": "4294152 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "4294152 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4294152 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 808.2,
            "unit": "ns/op",
            "extra": "1407486 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1407486 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1407486 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 881.9,
            "unit": "ns/op",
            "extra": "1300598 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1300598 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1300598 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 985.1,
            "unit": "ns/op",
            "extra": "1238541 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1238541 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1238541 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 873.4,
            "unit": "ns/op",
            "extra": "1411210 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1411210 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1411210 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1175,
            "unit": "ns/op",
            "extra": "994396 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 186,
            "unit": "B/op",
            "extra": "994396 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "994396 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 2106,
            "unit": "ns/op",
            "extra": "790226 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "790226 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "790226 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 844.1,
            "unit": "ns/op",
            "extra": "1427188 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1427188 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1427188 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 1000,
            "unit": "ns/op",
            "extra": "1149748 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1149748 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1149748 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2071,
            "unit": "ns/op",
            "extra": "515209 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 293,
            "unit": "B/op",
            "extra": "515209 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "515209 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 24.38,
            "unit": "ns/op",
            "extra": "48595606 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48595606 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48595606 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5465,
            "unit": "ns/op",
            "extra": "212810 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1491,
            "unit": "B/op",
            "extra": "212810 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "212810 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 8244,
            "unit": "ns/op",
            "extra": "139573 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2040,
            "unit": "B/op",
            "extra": "139573 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "139573 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 76270,
            "unit": "ns/op",
            "extra": "15938 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19996,
            "unit": "B/op",
            "extra": "15938 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "15938 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 955610,
            "unit": "ns/op",
            "extra": "1297 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191193,
            "unit": "B/op",
            "extra": "1297 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4830,
            "unit": "allocs/op",
            "extra": "1297 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 11770045,
            "unit": "ns/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1913079,
            "unit": "B/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48547,
            "unit": "allocs/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 92038,
            "unit": "ns/op",
            "extra": "13186 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20091,
            "unit": "B/op",
            "extra": "13186 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "13186 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 948875,
            "unit": "ns/op",
            "extra": "1164 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194274,
            "unit": "B/op",
            "extra": "1164 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1164 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 11748267,
            "unit": "ns/op",
            "extra": "96 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1954085,
            "unit": "B/op",
            "extra": "96 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61164,
            "unit": "allocs/op",
            "extra": "96 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6751,
            "unit": "ns/op",
            "extra": "161416 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1824,
            "unit": "B/op",
            "extra": "161416 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "161416 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 7569,
            "unit": "ns/op",
            "extra": "152683 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1808,
            "unit": "B/op",
            "extra": "152683 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "152683 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4266,
            "unit": "ns/op",
            "extra": "275473 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1516,
            "unit": "B/op",
            "extra": "275473 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "275473 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5569093,
            "unit": "ns/op",
            "extra": "211 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1306916,
            "unit": "B/op",
            "extra": "211 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40089,
            "unit": "allocs/op",
            "extra": "211 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9588,
            "unit": "ns/op",
            "extra": "126458 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3028,
            "unit": "B/op",
            "extra": "126458 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "126458 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 11373,
            "unit": "ns/op",
            "extra": "105398 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2450,
            "unit": "B/op",
            "extra": "105398 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "105398 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 6693,
            "unit": "ns/op",
            "extra": "174561 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1743,
            "unit": "B/op",
            "extra": "174561 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "174561 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 36791,
            "unit": "ns/op",
            "extra": "31671 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16619,
            "unit": "B/op",
            "extra": "31671 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "31671 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 119734,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1276519,
            "unit": "ns/op",
            "extra": "900 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "900 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "900 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 15997453,
            "unit": "ns/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349917,
            "unit": "B/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 9467900766,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5286067608,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60937055,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 252618230,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139787258,
            "unit": "B/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676185,
            "unit": "allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 9862637552,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5423267912,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62547609,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 16686,
            "unit": "ns/op",
            "extra": "67370 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7550,
            "unit": "B/op",
            "extra": "67370 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "67370 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 888.9,
            "unit": "ns/op",
            "extra": "1333821 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1333821 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1333821 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 18167,
            "unit": "ns/op",
            "extra": "68070 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7550,
            "unit": "B/op",
            "extra": "68070 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "68070 times\n2 procs"
          }
        ]
      }
    ]
  }
}