import * as core from '@actions/core';
import * as release from './release';

async function run() {
  try {
    const channel = core.getInput('channel') || 'stable';

    if (channel == 'master') {
      core.setFailed(
        'using `flutter-version` with master channel is not supported.',
      );

      return;
    }

    const platform = release.getPlatform();

    const {
      version: selectedVersion,
      downloadUrl,
      channel: validatedChannel,
    } = await release.determineVersion('', channel, platform);

    core.info(
      `Latest Flutter version in channel ${channel}: ${selectedVersion}`,
    );
    core.setOutput('version', selectedVersion);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
