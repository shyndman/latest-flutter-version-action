# latest-flutter-version-action

Outputs information about the latest Flutter version in a channel.

This is the same logic as the
[`flutter-action`](https://github.com/subosito/flutter-action) action, so you
can turn around and use this version as a cache key.

# Usage

```yaml
steps:
- id: flutter-version
  uses: shyndman/latest-flutter-version-action@v1.0.2
  with:
    channel: 'dev'
- runs: echo ${{ steps.flutter-version.outputs.version }}
```
